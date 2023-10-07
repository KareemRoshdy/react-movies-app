const FooterCopyright = () => {
  const year = 2023;
  return (
    <div className="footer-copyright flex align-center space-between">
      <div className="copyright">
        <p>© copyright {year} Kareem Roshdy</p>
      </div>

      <div className="wrapper  flex align-center gap-25">
        <a href="#">privacy policy</a>
        <a href="#">terms and conditions</a>
      </div>
    </div>
  );
};

export default FooterCopyright;
