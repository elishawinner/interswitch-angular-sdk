import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-interswitch';-----___

  merchantCode = 'MX';
  payItemID = 'Default_Payable_MX';
  amount = '20000'; 
  paymentMode = 'TEST-CENT'; 
  customerEmail = 'elisha@test.com';
  customerName = 'Elisha Akan';
  paymentReference = 'tnt_' + Date.now(); 

  
  paymentCallback(data: any) {
    console.log('[CALLBACK] Payment response:', data);

    if (data?.transactionStatus === 'FAILED') {
      console.error('[ERROR] Payment Failed:', data.responseDescription || data.message);
    } else if (data?.transactionStatus === 'SUCCESS') {
      console.log('[SUCCESS] Payment completed successfully!');
    } else {
      console.warn('[INFO] Payment status unknown:', data);
    }
  }
}
