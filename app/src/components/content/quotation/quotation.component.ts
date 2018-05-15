import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {MailService} from '../../../services/mail.service';

@Component({
  selector: 'quotation',
  templateUrl: 'quotation.component.html'
})

export class QuotationComponent implements OnInit {

  @ViewChild('map') mapContainer: ElementRef;
  public mapContainerSize: { width: number, height: number };

  public name: string = 'shawn';
  public mail: string = 'shawnhellinckx@gmail.com';
  public phone: string = '0474606856';
  public address: string = 'Jan de cooman';
  public message: string = 'Kus mijn kloten amaai';

  constructor(private mailService: MailService) {
  }

  ngOnInit() {
    this.onResize();
  }

  public sendMail(): void {
    const message =
      `
        <h1>Offerte aanvraag</h1>
        <p>Naam: ${this.name}</p>
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
      })
      .catch(() => {
        // unsuccessful
      });
  }

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

}
