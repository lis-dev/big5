import {
  Answer,
  DomainResult,
  Result,
  ResultObject,
  domains,
  DomainResultObject,
} from '../types';

export class ResultCalculator {
  constructor(private calculationFunction: (s: number, c: number) => Result) {}

  calculate(answers: Answer[]): DomainResult {
    let domainResult: DomainResult = this.initDomainResult();

    for (let answer of answers) {
      const result = domainResult[answer.domain];
      result.score += answer.score;
      result.count++;
      result.result = this.calculationFunction(result.score, result.count);
      this.calculateFacet(result, answer);
    }
    return domainResult;
  }

  private calculateFacet(result: DomainResultObject, answer: Answer): void {
    const facets = result.facets;
    if (typeof facets[answer.facet] === 'undefined') {
      facets[answer.facet] = new ResultObject(0, 0, 'neutral');
    }
    const facet = facets[answer.facet];
    facet.count++;
    facet.score += answer.score;
    facet.result = this.calculationFunction(facet.score, facet.count);
  }

  private initDomainResult(): DomainResult {
    let domainResult: Partial<DomainResult> = {};
    for (let domain of domains) {
      domainResult[domain] = {
        score: 0,
        count: 0,
        result: 'neutral',
        facets: [],
      };
    }
    return domainResult as DomainResult;
  }
}
