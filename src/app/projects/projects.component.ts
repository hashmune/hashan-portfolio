import { Component } from "@angular/core";
import { ProjectCardComponent } from "../project-card/project-card.component";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      route: "/projects/elveguiden",
      imageSrc: "elveguiden-thumbnail.png",
      title: "Elveguiden",
      description:
        "Salmon fishing is a deeply ingrained and popular activity in the Scandinavian region, especially in Norway. See how we enhanced the experience of Elveguiden mobile app for salmon fishing enthusiasts",
    },
    {
      id: 2,
      route: "/projects/uni-design-system",
      imageSrc: "unimicro-thumbnail.png",
      title: "Unimicro design system",
      description:
        "Consistency and efficiency are key in financial management. Discover how we built a scalable design system to unify the user experience for one of Norway’s leading accounting software companies.",
    },
    {
      id: 3,
      route: "/projects/uni-mobile",
      imageSrc: "uni-mobile-thumbnail.png",
      title: "Unimicro time registering",
      description:
        "Tracking work hours should be effortless. Learn how we introduced a seamless time-logging feature to help professionals manage their schedules within Norway’s top accounting software mobile app.",
    },
    {
      id: 4,
      route: "projects/my1min",
      imageSrc: "my1min-thumbnail.png",
      title: "My1Min",
      description:
        "Finding the right talent is more than just matching resumes. Explore how we designed a smart recruitment platform that uses AI and interview training to connect skilled workers",
    },
  ];
}
