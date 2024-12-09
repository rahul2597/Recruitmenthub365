const Home = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <video
          className="w-full h-full object-cover absolute"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://v.ftcdn.net/04/82/34/88/700_F_482348815_5KRpa204hLmU1gyKBCnUsgAACLCVJbSn_ST.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
};

export default Home;
