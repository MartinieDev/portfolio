/* body {
  position: relative;
  overflow: hidden;
  height: 100vh;
}

body::before {
  content: '';
  position: absolute;
  inset: -50%;

  background: radial-gradient(
    circle at 50% 100%,
    rgba(48, 124, 217, 0.25),
    transparent 60%
  );

  animation: lightMove 3s linear infinite;
}

@keyframes lightMove {
  0% {
    transform: translateY(40%);
  }
  100% {
    transform: translateY(-40%);
  }
} */




    <div className="mode-wrap">
            <div className="outer-wrap">
              <div className="inner-wrap">

              </div>
            </div>
          </div>


  .mode-wrap {
  position: absolute;
  width: 1rem;
  height: 3rem;

  top: 5rem;
}

.outer-wrap {
  background: var(--text);
}

.inner-wrap {
  background: var(--bg);
}
