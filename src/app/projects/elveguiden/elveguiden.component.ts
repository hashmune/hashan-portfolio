import {
  Component,
  ElementRef,
  AfterViewInit,
  ViewChild,
  Renderer2,
  HostListener,
} from "@angular/core";
import { ButtonModule } from "primeng/button";
import { DynamicMarginTopService } from "../../services/dynamic-margin-service/dynamic-margin-top.service";
import { GoBackNavigationService } from "../../services/go-back/go-back-navigation.service";
import { DialogModule } from "primeng/dialog";
import { InputOtpModule } from "primeng/inputotp";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-elveguiden",
  standalone: true,
  imports: [ButtonModule, DialogModule, InputOtpModule, FormsModule],
  templateUrl: "./elveguiden.component.html",
  styleUrl: "./elveguiden.component.scss",
})
export class ElveguidenComponent implements AfterViewInit {
  @ViewChild("cover") cover!: ElementRef;
  @ViewChild("details") details!: ElementRef;

  visible: boolean = false;

  constructor(
    private renderer: Renderer2,
    private DynamicMarginTopService: DynamicMarginTopService,
    private GoBackNavigationService: GoBackNavigationService
  ) {}

  ngAfterViewInit(): void {
    this.updateMargin();
  }

  @HostListener("window:resize")
  onResize() {
    this.updateMargin();
  }

  updateMargin(): void {
    this.DynamicMarginTopService.updateMarginTop(this.cover, this.details, this.renderer);
  }

  goBack(): void {
    this.GoBackNavigationService.goBack();
  }

  showDialog() {
    this.visible = true;
  }
}
