import { TagContainer } from './styles';

export type Props = {
  size?: 'small' | 'big';
  children: string;
};

const Tag = ({ children = 'small' }: Props) => (
  <TagContainer>{children}</TagContainer>
);

export default Tag;
