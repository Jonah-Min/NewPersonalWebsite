import React, { PureComponent } from 'react';

import "../stylesheets/aboutPage.css";

class AboutPage extends PureComponent {
  render() {
    return (
      <span className="about-me-container">
        <span className="title-block">
          <span className="text">
            Hello there! I'm Jonah, it's nice to meet you.
            </span>
        </span>
        <span className="website-background-image" />
        <span className="about">
          <span className="description-block">
            Thank you for checking out my website!
            As you can probably guess, my name is Jonah, I'm a software engineer with a passion for art and photography.
            I'm also an avid rock climber and gamer, and I enjoy reading fantasy novels in my free time. Here's a little
            background about how I came to be who I am today.
            <br /><br />
            My interest in computer science first started when I was in my third year of high school.
            Since then I've been making random projects during my free time and just exploring what I can do with code.
            I also have around two and a half years of software development experience, working in companies
            such as HubSpot, Rue La La, and UPenn. I still try and make fun little websites and projects when I find the
            time. You can find examples in the projects page.
            <br /><br />
            I'm also someone who likes to excersize my creative brain
            in both my art and my photography. This is why I decided to pursue a minor in Art.
            I've also pursued many self studies in figure and portrait drawing, forcing myself to learn
            new concepts and ideas on my own outside of classes. I have also been an avid photographer since high school and
            recently purchased a new camera which I've been using for my street and portrait photography. You can find
            examples of my work on my art and photography pages.
          </span>
        </span>
      </span>
    );
  }
}

export default AboutPage;