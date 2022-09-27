import * as React from "react";

export default function IndexPage() {
  return (
    <main className="container-fluid p-5">
      <h1 className="display-1">
        Congratulations — you just made a website! 🎉🎉🎉
      </h1>
      <p className="my-5">
        Edit <code>src/pages/index.js</code> to see this page update in
        real-time. 😎
        <br />
        You have three options when creating this website:
      </p>
      <ol>
        <li>
          <a href="https://github.com/columbusacademy/wdc-jamplate">
            See the documentation on GitHub.
          </a>
        </li>
        <li>
          <a href="https://wdc.gtsb.io">
            Visit our webpage for more resources.
          </a>
        </li>
        <li>Follow your dreams. (Remember: Ask us any questions you have!)</li>
      </ol>
    </main>
  );
}
