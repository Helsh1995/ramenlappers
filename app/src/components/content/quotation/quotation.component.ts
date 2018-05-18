import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {MailService} from '../../../services/mail.service';
import {EMAIL_VALIDATOR} from '../../../utils/validators';

@Component({
  selector: 'quotation',
  templateUrl: 'quotation.component.html'
})

export class QuotationComponent implements OnInit {

  @ViewChild('map') mapContainer: ElementRef;
  public mapContainerSize: { width: number, height: number };

  public name: string = '';
  public mail: string = '';
  public phone: string = '';
  public address: string = '';
  public message: string = '';

  public errors: any[];
  public isSending: boolean;

  constructor(private mailService: MailService) {
    this.errors = [];
  }

  ngOnInit() {
    this.onResize();
  }

  public sendMail(): void {

    if (!this._isFormCorrect()) {
      return;
    }

    this.isSending = true;

    const message =
      `
        <h1>Offerte aanvraag</h1>
        <p>Naam: ${this.name}</p>
        <p>Mail: ${this.mail}</p>
        <p>Adres: ${this.address}</p>
        <p>Telefoon: ${this.phone}</p>
        <br>
        <br>
        <p>Bericht:</p>
        <p>--------------------------</p>
        <p>${this.message}</p>

      `;

    this.mailService.sendEmail(this.mail, message)
      .then(() => {
        // successful
        this.errors = [];
        this.isSending = false;
        this._clearForm();
      })
      .catch(() => {
        // unsuccessful
        this.errors.push({prop: 'mail_send', error: 'QUOTATION.FORM.ERROR.MAIL_SEND'});
        this.isSending = false;
      });
  }

  public isError(prop: string): any {
    return this.errors.find(item => item.prop == prop);
  }

  public getErrorToDisplay(): string {

    const mailError = this.errors.find(item => item.prop == 'mail');

    if (mailError) {
      return mailError.error;
    }

    const firstError = this.errors[0];

    return firstError ? firstError.error : '';
  };

  @HostListener('window:resize')
  public onResize(): void {

    if (!this.mapContainer) {
      return;
    }

    this.mapContainerSize = {
      width: this.mapContainer.nativeElement.clientWidth - 50,
      height: this.mapContainer.nativeElement.clientHeight - 50
    };

  }

  private _isFormCorrect(): boolean {
    this.errors = [];

    if (!this.name) {
      this.errors.push({prop: 'name', error: 'QUOTATION.FORM.ERROR.REQUIRED'});
    }

    if (!EMAIL_VALIDATOR(this.mail)) {
      this.errors.push({prop: 'mail', error: 'QUOTATION.FORM.ERROR.MAIL'});
    }

    return this.errors.length == 0;
  }

  private _clearForm(): void {
    this.name = '';
    this.mail = '';
    this.phone = '';
    this.address = '';
    this.message = '';
  }

}
