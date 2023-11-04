import MyButton from '../components/MyButton';

const Home = () => {
  return (
    <div>
      <MyButton text="버튼" type="positive" onCLick={() => alert('버튼 클릭!')} />
      <MyButton text="버튼" type="negative" onCLick={() => alert('버튼 클릭!')} />
      <MyButton text="버튼" type="default" onCLick={() => alert('버튼 클릭!')} />
      <MyButton text="버튼" type="asdfsdfsdf" onCLick={() => alert('버튼 클릭!')} />
      <h1>Home</h1>
      <p>이곳은 홈 입니다.</p>
    </div>
  );
};

export default Home;
