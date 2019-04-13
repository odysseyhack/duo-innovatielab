import {NgModule} from '@angular/core';
import {BlockService} from './service/block.service';
import {DatabaseService} from './service/database.service';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    BlockService,
    DatabaseService
  ]
})
export class SharedModule {
}
