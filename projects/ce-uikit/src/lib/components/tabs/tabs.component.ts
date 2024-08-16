import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { CeTabItemComponent } from './tab-item/tab-item.component';

@Component({
  selector: 'ce-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class CeTabsComponent implements AfterContentInit {

  @ContentChildren(CeTabItemComponent) tabItems!: QueryList<CeTabItemComponent>;

  constructor() { }

  ngAfterContentInit() {
    if (this.activeTabs.length === 0) {
      this.selectTab(this.tabItems.first);
    } else {
      this.sanitizeActiveTabs(this.activeTabs);
    }

  }

  selectTab(tab: CeTabItemComponent) {
    this.tabItems.toArray().forEach(t => t.active = false);
    tab.active = true;
  }

  private sanitizeActiveTabs(activeTabs: CeTabItemComponent[]): void {
    let isFirstActive = true;

    activeTabs.forEach(tab => {
      if (tab.active && isFirstActive) {
        isFirstActive = false;
      } else {
        tab.active = false;
      }
    });
  }

  get activeTabs() {
    return this.tabItems.filter(tab => tab.active);
  }
}
