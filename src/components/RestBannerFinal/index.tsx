import RestApresenta from '../../models/RestApresenta';
import RestBanner from '../RestBanner';

export type Props = {
  banners: RestApresenta[];
};

const RestBannerFinal = ({ banners }: Props) => (
  <>
    {banners.map((banner) => (
      <RestBanner
        key={banner.id}
        category={banner.category}
        image={banner.image}
        title={banner.title}
      />
    ))}
  </>
);

export default RestBannerFinal;
