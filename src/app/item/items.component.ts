import { Component, OnInit } from "@angular/core";

import { BarcodeScanner } from "nativescript-barcodescanner";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    public scannedCode: any;
    public scannedFormat: string;

    constructor() { }

    ngOnInit(): void {

    }

    public scan() {
        const barcodeScanner = new BarcodeScanner();
        barcodeScanner.scan({
            message: 'Toelichting hoe te scannen',
            beepOnScan: true,
            showFlipCameraButton: false,
            preferFrontCamera: false,
            showTorchButton: false,
            openSettingsIfPermissionWasPreviouslyDenied: true,
        }).then((result) => {
            this.scannedFormat = result.format
            this.scannedCode = result.text;
        })
    }
}
