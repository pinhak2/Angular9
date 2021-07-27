import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";


@Directive({
  selector: "[myFor]",
})
export class ForDirective implements OnInit {
  @Input("myForEm")
  arrayNumbers!: number[];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}
  
  ngOnInit(): void {
    for(let elementNumber of this.arrayNumbers){
      this.container.createEmbeddedView(this.template, { $implicit: elementNumber});
    }
  }
}
