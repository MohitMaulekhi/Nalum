export default function Notifications({ messages }) {
  return messages ? (
    <div className="notifs">
      {messages.map((e) => {
        return (
          <div className="notif" key={e.title}>
            <div className="header">{e.title}</div>
            <div className="body">{e.message}</div>
          </div>
        );
      })}
    </div>
  ) : (
    <></>
  );
}
