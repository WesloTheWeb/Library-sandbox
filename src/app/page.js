// import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {

  const TableOfContents = [
    {
      topic: 'DatePickers',
      pathway: '/datePickers'
    }
  ]

  return (
    <main>
      This is just a library dump of NPM packages that I may want to play around with that may or may not be related to my work
      or something I just want to test because I dislike browser codebox. It is in JavaScript for simplicity.
      <section className="table-contents">
        <h2>Table of contents</h2>
        <ol>
          {
            TableOfContents.map((topic) => {
              return (
                <li>
                  <Link
                    key={topic.topic}
                    href={topic.pathway}>{topic.topic}</Link>
                </li>
              )
            }
            )}
        </ol>
      </section>
    </main>
  );
}
