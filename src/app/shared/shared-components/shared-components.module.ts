import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeadComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
  exports: [LayoutComponent, SidebarComponent, HeadComponent, FooterComponent],
})
export class SharedComponentsModule {}
