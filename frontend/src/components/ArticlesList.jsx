import { Link } from 'react-router-dom';
import Container from './container';

const files = [
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80'
  },
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/01/Teal-Grey-Blue-Bright-White-Dark-Grey-and-Aqua-Marine.jpg?auto=format&q=60&fit=max&w=930'
  }
];

export default function ArticlesList() {
  return (
    <Container className="flex flex-col gap-4 h-full">
      {files.map((file) => (
        <div key={file.source} className="flex items-stretch gap-3 lg:flex-row flex-col h-full">
          <img
            src={file.source}
            alt=""
            className="pointer-events-none group-hover:opacity-75 object-cover max-h-96 lg:max-h-full w-full lg:w-[300] lg:h-[235px] grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
          />
          <div className="flex flex-col gap-6 h-full">
            <div className="h-full gap-4 flex flex-col">
              <h1 className="text-3xl font-bold">The monthly meeting rocked</h1>
              <p>
                <span className="text-gray-500">2023-01-09 11:03:14</span> <span className="text-gray-500">·</span> <span className="text-gray-900 font-bold">BBC</span>
              </p>
              <p className="mt-4 text-gray-500 ">
                As with (almost) every last Friday of the month, we had our typical monthly meeting with the entire team. We received the sad news that, this month, the sales
                target — probably — will not be met. It was also announced that our 30th branch will open next month. Our CEO announced that with the arrival of the 50 new
                employees,the amount of coffee consumed increased slightly.
              </p>
            </div>
            <div className="flex justify-end w-full h-full items-end">
              <Link to="/" className="text-sm font-medium text-secondary">
                Read more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
}
