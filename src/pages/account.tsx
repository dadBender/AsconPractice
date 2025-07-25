import { useSelector } from 'react-redux';
import { RootState } from '@app/store';

const AccountPage = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) return <div>Загрузка...</div>;

  return (
    <div>
      <h1>Личный кабинет</h1>
      <p>Имя: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default AccountPage;
