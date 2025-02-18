import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgsFormsComponentRegistryService, NgsFormsService } from '@ng-simplicity/forms-core';
import { NgsFormsBootstrapModule } from '@ng-simplicity/forms-bootstrap';

@Component({
  selector: 'ngs-default-form',
  imports: [CommonModule, NgsFormsBootstrapModule],
  providers: [NgsFormsService],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss',
})
export class DefaultComponent {
  constructor(
    private readonly ngsFormsService: NgsFormsService,
    ngsFormsRegistryService: NgsFormsComponentRegistryService
  ) {
    NgsFormsBootstrapModule.registerAllBootStrapComponents(ngsFormsRegistryService);
  }
}
