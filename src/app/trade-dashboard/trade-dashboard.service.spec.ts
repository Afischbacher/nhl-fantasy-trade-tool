import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CoreModule } from '@app/core';
import { NhlDataService } from '@app/core/services/nhl-data.service';

describe('NhlDataService', () => {
  let nhlService: NhlDataService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        HttpClientTestingModule
      ],
      providers: [
        NhlDataService
      ]
    });
  }));

  beforeEach(inject([
    ,
    NhlDataService,
    HttpTestingController
  ], (
      _quoteService: NhlDataService,
      _httpMock: HttpTestingController) => {

    nhlService = _quoteService;
    httpMock = _httpMock;

  }));

  afterEach(() => {
    httpMock.verify();
  });

  describe('getCurrentTeams', () => {
    it('should return a list of teams', () => {
      // Arrange
      // Act
      const getCurrentTeams = nhlService.getCurrentTeams();

      // Assert
      getCurrentTeams.subscribe(val => {
        expect(val).toBe(val.teams !== null);
      });
      httpMock.expectOne({}).flush(getCurrentTeams);
    });
  });
});
