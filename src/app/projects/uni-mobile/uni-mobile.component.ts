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
  selector: "app-uni-mobile",
  standalone: true,
  imports: [ButtonModule, DialogModule, InputOtpModule, FormsModule],
  templateUrl: "./uni-mobile.component.html",
  styleUrl: "./uni-mobile.component.scss",
})
export class UniMobileComponent {
  @ViewChild("cover") cover!: ElementRef;
  @ViewChild("details") details!: ElementRef;

  visible: boolean = false;
  passwordInput!: string;
  isPasswordCorrect: boolean = false;

  private correctPassword: string = "1994";

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

  checkPassword(): void {
    this.isPasswordCorrect = this.passwordInput === this.correctPassword;
    if (!this.isPasswordCorrect) {
      alert("Incorrect password. Please try again.");
      this.passwordInput = "";
    }
  }

  modalHide() {
    this.passwordInput = "";
    this.isPasswordCorrect = false;
  }
}
