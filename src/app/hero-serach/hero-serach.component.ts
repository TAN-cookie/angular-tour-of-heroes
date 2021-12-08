import { Component, OnInit } from '@angular/core';

import { debounce, debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs'

import { Hero } from '../hero';

import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-serach',
  templateUrl: './hero-serach.component.html',
  styleUrls: ['./hero-serach.component.css']
})
export class HeroSerachComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  // 사용자가 입력한 검색어를 옵저버블 스트림으로 보냅니다.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // 연속된 키입력을 처리하기 위해 300ms 대기합니다.
      debounceTime(300),
      // 이전에 입력한 검색어와 같으면 무시합니다.
      distinctUntilChanged(),
      // 검색어가 변경되면 새로운 옵저버블을 생성합니다.
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

}
