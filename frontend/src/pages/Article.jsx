import { useParams } from 'react-router-dom';
import Container from '../components/container';

export default function Article() {
  const { id } = useParams();
  return (
    <Container className="flex flex-col gap-4 h-full">
      <article className="flex items-stretch gap-3 lg:flex-row flex-col h-full">
        <img
          src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
          alt=""
          className="pointer-events-none group-hover:opacity-75 object-cover max-h-96 lg:max-h-full w-full lg:w-[400px] lg:h-[600px] grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
        />
        <div className="flex flex-col gap-6 h-full lg:w-[100%]">
          <div className="h-full gap-4 flex flex-col">
            <h1 className="text-5xl font-bold">The monthly meeting rocked</h1>
            <p className="mt-4 text-gray-500 text-xl">
              As with (almost) every last Friday of the month, we had our typical monthly meeting with the entire team. We received the sad news that, this month, the sales target
              — probably — will not be met. It was also announced that our 30th branch will open next month. Our CEO announced that with the arrival of the 50 new employees,the
              amount of coffee consumed increased slightly. probably — will not be met. It was also announced that our 30th branch will open next month. Our CEO announced that with
              the arrival of the 50 new employees,the amount of coffee consumed increased slightly. probably — will not be met. It was also announced that our 30th branch will open
              next month. Our CEO announced that with the arrival of the 50 new employees,the amount of coffee consumed increased slightly.
            </p>
          </div>
        </div>
      </article>
      <p className="flex items-end justify-end flex-col">
        <span>
          <span className="text-gray-500">2023-01-09 11:03:14</span> <span className="text-gray-500">·</span> <span className="text-gray-900 font-bold">BBC</span>
        </span>
        <span>
          by <span className="text-gray-900 font-bold">John Doe</span>
        </span>
      </p>
    </Container>
  );
}
