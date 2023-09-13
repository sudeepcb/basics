import { OnInit, OnChanges, DoCheck, Component, Input, EventEmitter, Output, SimpleChanges, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements
  OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy
  {
  @Input() postImage : string = '';
  @Output() imgSelected = new EventEmitter<string>();
  @Input() sayingHello : string = "";
  @Output() sayingBye = new EventEmitter<string>();

  constructor(){
    console.log("ctor called", this.postImage);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges => ', changes);
  }

  ngOnInit(){
    console.log('ngOnInIt() called', this.postImage);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck() called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked() called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestory() called');
  }

}
