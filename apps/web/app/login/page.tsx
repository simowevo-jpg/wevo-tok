export default function LoginPage() {
  return (
    <main className="auth-shell">
      <div className="auth-card">
        <div className="auth-brand">
          <div className="brand-logo">W</div>
          <div>
            <p className="eyebrow">WEVOTOK</p>
            <h1>Welcome back</h1>
          </div>
        </div>

        <form className="auth-form">
          <label>
            <span>Email</span>
            <input type="email" defaultValue="aisha@wevotok.com" />
          </label>

          <label>
            <span>Password</span>
            <input type="password" defaultValue="123456" />
          </label>

          <div className="auth-row">
            <label className="remember-me">
              <input type="checkbox" defaultChecked />
              <span>Remember me</span>
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="auth-submit">Login to WevoTok</button>
        </form>

        <div className="auth-footer">
          <span>New here?</span>
          <a href="#">Create account</a>
        </div>
      </div>
    </main>
  );
}
