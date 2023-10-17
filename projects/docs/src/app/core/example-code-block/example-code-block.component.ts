import { AfterViewInit, Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DemoCodeBlockStoreService } from './example-code-block-store.service';
import { ExampleSourceFetcherService } from './example-source-fetcher.service';
import hljs from 'highlight.js';
import xml from 'highlight.js/lib/languages/xml';

@Component({
  selector: 'app-example-code-block',
  templateUrl: './example-code-block.component.html',
  styleUrls: ['./example-code-block.component.css']
})
export class ExampleCodeBlockComponent implements AfterViewInit {

  @Input() ref!: string;
  source: any;

  @ViewChild('codeBlockContainer', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  constructor(
    private codeBlockStoreService: DemoCodeBlockStoreService,
    private codeBlockSourceService: ExampleSourceFetcherService
  ) { }

  ngAfterViewInit() {
    this.createAndDisplayDynamicComponent();
    this.loadSource();
  }

  private createAndDisplayDynamicComponent() {

    const componentType = this.codeBlockStoreService.getComponentType(this.ref);

    if (!componentType) {
      throw new Error(`Cannot find ${componentType} from code block store, please set component type in module`)
    }

    const component = this.vcr.createComponent(componentType);
    component.changeDetectorRef.detectChanges();
  }

  private async loadSource() {
    const source = await this.codeBlockSourceService.fetchSource(this.ref);
    hljs.registerLanguage('xml', xml);
    this.source = hljs.highlight(source, { language: 'html' }).value;
  }
}