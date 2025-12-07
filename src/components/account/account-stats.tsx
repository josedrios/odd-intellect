interface StatProps {
  label: string;
  value: string;
  edit?: boolean;
}

export default function AccountStatList() {
  const info = [
    {
      label: 'bio',
      value:
        'This is my bio for my account on this platform called odd intellect. I am writing nonsense to make this biography longer.',
    },
    { label: 'email', value: 'johndoe@mail.com' },
    { label: 'current streak', value: '2 weeks' },
    { label: 'longest streak', value: '17 weeks' },
    { label: 'user since', value: '4/20/2025' },
    { label: 'comments', value: '87' },
    { label: 'upvotes', value: '1273' },
    { label: 'downvotes', value: '106' },
    { label: 'real name', value: 'John Doe' },
    { label: 'country', value: 'United States of America' },
    { label: 'date of birth', value: '4/20/2002' },
    { label: 'age', value: '23' },
    { label: 'gender', value: 'male' },
  ];

  return (
    <div className="account-stat-list">
      <AccountStat label={'EDIT PROFILE'} value={''} edit />
      {info.map((stat, i) => (
        <AccountStat label={stat.label} value={stat.value} key={i} />
      ))}
    </div>
  );
}

function AccountStat({ label, value, edit = false }: StatProps) {
  return (
    <div className="account-stat">
      {edit ? (
        <a className="account-stat__key">{label.toUpperCase()}</a>
      ) : (
        <p className="account-stat__key">{label.toUpperCase()}</p>
      )}
      <p className="account-stat__value">{value.toUpperCase()}</p>
    </div>
  );
}
