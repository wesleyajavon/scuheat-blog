export default function Profil(props) {
  const imageSrc = props.image.src ? props.image.src : props.image;
  const imageAlt = props.image.alt ? props.image.alt : props.name;

  return (
    <article className="flex flex-row gap-4 mb-4 bg-gray-800 text-white rounded-xl shadow-lg p-4">
      <div className="w-[20vh] h-[30vh] overflow-hidden rounded-lg flex-shrink-0">
        <img
          className="w-full h-full object-cover"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>

      <div className="flex flex-col justify-between flex-grow p-2">
        <div className="flex items-center gap-3">
          <img
            className="w-[6vh] h-[4vh] object-cover rounded"
            src={`./flags/${props.country}.png`}
            alt={props.country}
          />
          <div>
            <span className="uppercase text-lg font-semibold">{props.country}</span>
            <span className="ml-4 text-sm text-gray-400">{props.hometown}</span>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-2xl font-bold">{props.name}</h2>
          <p className="text-lg text-gray-300">{props.position}</p>
        </div>
      </div>
    </article>
  );
}
