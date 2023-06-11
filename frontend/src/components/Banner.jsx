import Container from './container';

function Banner() {
  return (
    <Container className="flex flex-col gap-3">
      <div>
        <h1 className="text-3xl font-bold">The monthly meeting rocked</h1>
        <p className="mt-4 text-gray-500 ">
          As with (almost) every last Friday of the month, we had our typical monthly meeting with the entire team. We received the sad news that, this month, the sales target —
          probably — will not be met. It was also announced that our 30th branch will open next month. Our CEO announced that with the arrival of the 50 new employees,the amount of
          coffee consumed increased slightly.
        </p>
      </div>
      <div className="bg-cover bg-center h-full text-white py-24 px-10 object-fill bg-[url(https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)]"></div>
      <div className="flex justify-center">
        <p>Photo of the online call via Google Meet held on Friday, August 26, 2022.</p>
      </div>
    </Container>
  );
}

export default Banner;
