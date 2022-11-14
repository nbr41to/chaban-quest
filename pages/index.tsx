import { Field } from '@/features/Field';
import { Player } from '@/features/Player';

const map = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 1, 2, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const Home = () => {
  // const fps = useFPS();
  const fps = 60;

  return (
    <div className="p-10">
      <h1 className="my-8 text-center text-4xl">茶番クエスト</h1>
      <div>fps:{fps}</div>
      <div className="relative h-[400px] w-[400px] outline outline-4 outline-black">
        <Field map={map} />
        <Player map={map} />
      </div>
    </div>
  );
};

export default Home;
