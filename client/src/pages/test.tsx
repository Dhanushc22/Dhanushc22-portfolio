export default function TestPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#1e3a8a', 
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1>🎉 React is Working!</h1>
        <p>If you see this, the basic setup is fine.</p>
      </div>
    </div>
  );
}
