import React from "react";
import Link from "gatsby-link";
import Script from "react-load-script";
import graphql from "graphql";
import logo from '../img/reactdenverlogo.png';

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (typeof window !== `undefined` && window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div>
        <div className="intro has-text-centered">
          <figure className="image is-inline-block">
            <img src={logo} alt="Kaldi" style={{ width: '200px' }} />
          </figure>
          <h1 style={{ fontSize: '55px' }}>Welcome to React Denver Meetup!</h1>
          <p />
          <p>
            React Denver is focused on Facebook's ReactJS library and the
            technologies and architectures surrounding it.{' '}
          </p>
          <p>
            We welcome initiates, beginners, mid-level, and experts alike. This
            meetup is focused on sharing successes{' '}
          </p>
          <p>
            and failures in working with React and the backing stack. Come share
            stories, listen to talks, eat, drink, and be merry.
          </p>
          <p>Turing School of Software & Design</p>
          <p>1331 17th St 100 · Denver, CO</p>
          <p>We are on the corner of 17th and Market in the </p>
          <p> basement of the Guaranty Bank Building.</p>
        </div>
        <section className="section">
          <Script
            url="https://identity.netlify.com/v1/netlify-identity-widget.js"
            onLoad={() => this.handleScriptLoad()}
          />
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Upcoming Events: Tues, Oct 16th, 2018
  6:00 PM to 8:00 PM</h1>
            </div>
            {posts
              .filter(post => post.node.frontmatter.templateKey === "blog-post")
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{ border: "2px solid #eaecee", padding: "2em 4em" }}
                  key={post.id}
                >
                  <p>
                    <Link className="has-text-primary" to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.frontmatter.path}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              ))}
          </div>
        </section>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
