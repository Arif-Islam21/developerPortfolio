// const Card = ({ text, icons }) => {
//   return (
//     <div data-aos="zoom-in" data-aos-duration="1500">
//       <div className="card my-4 bg-base-100 hover:bg-text-Color hover:text-black hover:scale-110 transition hover:shadow-xl duration-1000 shadow-xl">
// <figure className="min-w-64 ">
//   <div className="min-w-60 pt-6  flex justify-center">{icons}</div>
// </figure>
//         <div className="card-body items-center">
//           <h2 className="card-title font-merriWeather">{text}</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

const Card = ({ text, icons }) => {
  return (
    <div className="relative h-48 bg-white rounded-lg shadow-lg overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-blue-500 to-green-500 animate-border move-border"></div>
      <div className="relative p-2 bg-white rounded-lg">
        <figure className="min-w-64 ">
          <div className="min-w-60 pt-6  flex justify-center">{icons}</div>
        </figure>
        <h2 className="text-lg font-semibold">{text}</h2>
      </div>
    </div>
  );
};

export default Card;
