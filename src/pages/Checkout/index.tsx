import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Navigate } from 'react-router-dom';
import InputMask from 'react-input-mask';

import * as S from './styles';

import Button from '../../components/Button';
import Card from '../../components/Card';

import { RootReducer } from '../../store';

import { clear } from '../../store/reducers/cart';
import { usePurchaseMutation } from '../../services/api';

// Componente Checkout
const Checkout = ({ onBackToCart }: { onBackToCart: () => void }) => {
  const { items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState<
    'delivery' | 'payment' | 'confirmation'
  >('delivery');
  const [purchase, { data: purchaseResponse, isLoading, isSuccess }] =
    usePurchaseMutation();

  const formik = useFormik({
    initialValues: {
      deliveryName: '',
      description: '',
      city: '',
      zipCode: '',
      deliveryNumber: '',
      complement: '',
      name: '',
      cardNumber: '',
      month: '',
      year: '',
      code: ''
    },
    validationSchema: Yup.object({
      deliveryName: Yup.string().required('O campo é obrigatório'),
      description: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      zipCode: Yup.string()
        .required('O campo é obrigatório')
        .matches(/^\d{5}-\d{3}$/, 'CEP inválido'),
      deliveryNumber: Yup.string().required('O campo é obrigatório'),
      name: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .required('O campo é obrigatório')
        .matches(/^\d{4} \d{4} \d{4} \d{4}$/, 'Número do cartão inválido'), //
      month: Yup.string()
        .required('O campo é obrigatório')
        .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido'), // Formato MM
      year: Yup.string()
        .required('O campo é obrigatório')
        .matches(/^\d{2}$/, 'Ano inválido'),
      code: Yup.string()
        .required('O campo é obrigatório')
        .matches(/^\d{3}$/, 'Código inválido')
    }),

    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.deliveryName,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: values.deliveryNumber,
            complement: values.complement
          }
        },
        payment: {
          card: {
            code: Number(values.code),
            name: values.name,
            number: values.cardNumber,
            expires: {
              month: Number(values.month),
              year: Number(values.year)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      });
    }
  });

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in formik.touched;
    const isInvalid = fieldName in formik.errors;
    const hasError = isTouched && isInvalid;

    return hasError;
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear());
      setCurrentStep('confirmation');
    }
  }, [dispatch, isSuccess]);

  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      {/* Etapa 1: Card de Entrega */}
      {currentStep === 'delivery' && (
        <S.Form onSubmit={() => setCurrentStep('payment')}>
          <Card title="Dados de Entrega">
            <>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="deliveryName">Nome do destinatário</label>
                  <input
                    id="deliveryName"
                    type="text"
                    name="deliveryName"
                    value={formik.values.deliveryName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                      checkInputHasError('deliveryName') ? 'error' : ''
                    }
                  />
                  {formik.touched.deliveryName && formik.errors.deliveryName ? (
                    <div className="error-message">
                      {formik.errors.deliveryName}
                    </div>
                  ) : null}
                </S.InputGroup>
              </S.Row>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="description">Endereço</label>
                  <input
                    id="description"
                    type="text"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkInputHasError('description') ? 'error' : ''}
                  />
                  {formik.touched.description && formik.errors.description ? (
                    <div className="error-message">
                      {formik.errors.description}
                    </div>
                  ) : null}
                </S.InputGroup>
              </S.Row>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkInputHasError('city') ? 'error' : ''}
                  />
                  {formik.touched.city && formik.errors.city ? (
                    <div className="error-message">{formik.errors.city}</div>
                  ) : null}
                </S.InputGroup>
              </S.Row>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="zipCode">CEP</label>
                  <InputMask
                    id="zipCode"
                    type="text"
                    name="zipCode"
                    value={formik.values.zipCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkInputHasError('zipCode') ? 'error' : ''}
                    mask="99999-999"
                  />
                  {formik.touched.zipCode && formik.errors.zipCode ? (
                    <div className="error-message">{formik.errors.zipCode}</div>
                  ) : null}
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="deliveryNumber">Número</label>
                  <input
                    id="deliveryNumber"
                    type="text"
                    name="deliveryNumber"
                    value={formik.values.deliveryNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                      checkInputHasError('deliveryNumber') ? 'error' : ''
                    }
                  />
                  {formik.touched.deliveryNumber &&
                  formik.errors.deliveryNumber ? (
                    <div className="error-message">
                      {formik.errors.deliveryNumber}
                    </div>
                  ) : null}
                </S.InputGroup>
              </S.Row>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input
                    id="complement"
                    type="text"
                    name="complement"
                    value={formik.values.complement}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkInputHasError('complement') ? 'error' : ''}
                  />
                  {formik.touched.complement && formik.errors.complement ? (
                    <div className="error-message">
                      {formik.errors.complement}
                    </div>
                  ) : null}
                </S.InputGroup>
              </S.Row>
            </>
          </Card>
          <Button
            title="Continuar para pagamento"
            type="button"
            onClick={() => setCurrentStep('payment')}
          >
            Continuar para pagamento
          </Button>
          <Button
            title="Voltar ao carrinho"
            type="button"
            onClick={onBackToCart}
          >
            Voltar ao carrinho
          </Button>
        </S.Form>
      )}

      {/* Etapa 2: Card de Pagamento */}
      {currentStep === 'payment' && (
        <S.Form onSubmit={formik.handleSubmit}>
          <Card title="Dados de Pagamento">
            <>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="name">Nome no cartão</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkInputHasError('name') ? 'error' : ''}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="error-message">{formik.errors.name}</div>
                  ) : null}
                </S.InputGroup>
              </S.Row>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <InputMask
                    id="cardNumber"
                    type="text"
                    name="cardNumber"
                    value={formik.values.cardNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                    mask="9999 9999 9999 9999"
                  />
                  {formik.touched.cardNumber && formik.errors.cardNumber ? (
                    <div className="error-message">
                      {formik.errors.cardNumber}
                    </div>
                  ) : null}
                </S.InputGroup>
                <S.InputGroup maxWidth="88px">
                  <label htmlFor="code">CVV</label>
                  <InputMask
                    id="code"
                    type="text"
                    name="code"
                    value={formik.values.code}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkInputHasError('code') ? 'error' : ''}
                    mask="999"
                  />
                  {formik.touched.code && formik.errors.code ? (
                    <div className="error-message">{formik.errors.code}</div>
                  ) : null}
                </S.InputGroup>
              </S.Row>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="month">Mês do vencimento</label>
                  <InputMask
                    id="month"
                    type="text"
                    name="month"
                    value={formik.values.month}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkInputHasError('month') ? 'error' : ''}
                    mask="99"
                  />
                  {formik.touched.month && formik.errors.month ? (
                    <div className="error-message">{formik.errors.month}</div>
                  ) : null}
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="year">Ano de vencimento</label>
                  <InputMask
                    id="year"
                    type="text"
                    name="year"
                    value={formik.values.year}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkInputHasError('year') ? 'error' : ''}
                    mask="99"
                  />
                  {formik.touched.year && formik.errors.year ? (
                    <div className="error-message">{formik.errors.year}</div>
                  ) : null}
                </S.InputGroup>
              </S.Row>
            </>
          </Card>
          <Button
            type="submit"
            title="Finalizar pagamento"
            disabled={isLoading}
          >
            {isLoading ? 'Finalizando pagamento...' : 'Finalizar pagamento'}
          </Button>
          <Button
            title="Voltar para a edição de endereço"
            type="button"
            onClick={() => setCurrentStep('delivery')}
          >
            Voltar para a edição de endereço
          </Button>
        </S.Form>
      )}

      {/* Etapa 3: Card de Confirmação */}
      {currentStep === 'confirmation' && purchaseResponse && (
        <Card title={`Pedido realizado - ${purchaseResponse.orderId}`}>
          <div>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Button
              type="button"
              title="Concluir"
              onClick={() => window.location.reload()}
            >
              Concluir
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Checkout;
