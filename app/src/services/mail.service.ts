import {Injectable} from '@angular/core';
import {MAIL} from '../configs/mail.config';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {API_ENDPOINTS} from '../utils/api_endpoints';

@Injectable()
export class MailService {

  constructor(private http: HttpClient) {
  }

  public sendEmail(mail: string, message: string): Promise<any> {

    return new Promise<any>((resolve, reject) => {

      const body = {
        from: mail,
        to: MAIL.TO_MAIL,
        subject: 'offerte aanvraag - website',
        message: message
      };

      const options = {
        body: body
      };

      this.http.post(environment.BASE_URL + API_ENDPOINTS.SEND_MAIL, body)
        .subscribe(result => {
          console.log(result);
          resolve();
        }, error => {
          console.log(error);
          reject();
        });

    });

  }
}
