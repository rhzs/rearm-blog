const Paragraph = ({ children }) => (
  <p>
    {children}
    <style jsx>{`
      p {
        margin: 20px 0;
        line-height: 32px;
        letter-spacing: -0.003em;
      }
    `}</style>
  </p>
);

export default Paragraph;
