import { useNewYorkTimesApi } from '../hooks/articles/useNewYorkTimes';
import Container from './container';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';

function Banner() {
  const section = useSelector((state) => state.news.section);
  const { data, error, isLoading } = useNewYorkTimesApi(section);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong...</div>;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {data?.map((item, index) => (
        <div key={index}>
          <Container className="flex flex-col gap-3">
            <div>
              <a href={item?.url} target="_blank" rel="noreferrer">
                <h1 className="text-3xl font-bold">{item ? item?.title : ''}</h1>
              </a>
              <p className="mt-4 text-gray-500 ">{item && item?.abstract}</p>
            </div>
            {item?.multimedia[0] && (
              <img
                src={item?.multimedia[1].url}
                alt={item?.multimedia[1].caption}
                loading="lazy"
                className="pointer-events-none group-hover:opacity-75 object-cover max-h-96 lg:max-h-full w-full lg:w-full lg:h-[350px] grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
              />
            )}
            <div className="flex justify-center">
              <p>
                <span className="font-bold">photo {item && item?.multimedia[1].caption}</span> | {item?.section} | {item?.byline} |{' '}
                <span>
                  {item && item?.published_date
                    ? new Date(item?.published_date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
                    : ''}
                </span>
              </p>
            </div>
          </Container>
        </div>
      ))}
    </Slider>
  );
}

export default Banner;
