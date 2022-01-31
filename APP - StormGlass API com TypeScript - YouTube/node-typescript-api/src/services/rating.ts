import { Beach, GeoPosition } from '@src/models/beach';
import { ForecastPoint } from '@src/clients/stormGlass';

// meters
const waveHeights = {
  ankleToKnee: {
    min: 0.3,
    max: 1.0,
  },
  waistHigh: {
    min: 1.0,
    max: 2.0,
  },
  headHigh: {
    min: 2.0,
    max: 2.5,
  },
};

export class Rating {
  constructor(private beach: Beach) {}

  public getRateForPoint(point: ForecastPoint): number {
    const swellDirection = this.getPositionFromLocation(point.swellDirection);
    const windDirection = this.getPositionFromLocation(point.windDirection);
    const windAndWaveRating = this.getRatingBasedOnWindAndWavePositions(
      swellDirection,
      windDirection
    );
    const swellHeightRating = this.getRatingForSwellSize(point.swellHeight);
    const swellPeriodRating = this.getRatingForSwellPeriod(point.swellPeriod);
    const finalRating =
      (windAndWaveRating + swellHeightRating + swellPeriodRating) / 3;
    return Math.round(finalRating);
  }

  public getRatingBasedOnWindAndWavePositions(
    waveDirection: GeoPosition,
    windDirection: GeoPosition
  ): number {
    // if wind is onshore, low rating
    if (waveDirection === windDirection) {
      return 1;
    } else if (this.isWindOffShore(waveDirection, windDirection)) {
      return 5;
    }
    // cross winds gets 3
    return 3;
  }

  private isWindOffShore(
    waveDirection: GeoPosition,
    windDirection: GeoPosition
  ): boolean {
    return (
      this.isWaveNorthAndWindSouth(waveDirection, windDirection) ||
      this.isWaveSouthAndWindNorth(waveDirection, windDirection) ||
      this.isWaveEastAndWindWest(waveDirection, windDirection) ||
      this.isWaveWestAndWindEast(waveDirection, windDirection)
    );
  }

  /**
   * Rate will start from 1 given there will be always some wave period
   */
  public getRatingForSwellPeriod(period: number): number {
    if (period < 7) return 1;
    if (period < 10) return 2;
    if (period < 14) return 4;
    return 5;
  }

  /**
   * Rate will start from 1 given there will always some wave height
   */
  public getRatingForSwellSize(height: number): number {
    if (height < waveHeights.ankleToKnee.min) return 1;
    if (height < waveHeights.ankleToKnee.max) return 2;
    if (height < waveHeights.waistHigh.max) return 3;
    return 5;
  }

  public getPositionFromLocation(coordinates: number): GeoPosition {
    if (coordinates < 50) return GeoPosition.N;
    if (coordinates < 120) return GeoPosition.E;
    if (coordinates < 220) return GeoPosition.S;
    if (coordinates < 310) return GeoPosition.W;
    return GeoPosition.N;
  }

  private isWaveNorthAndWindSouth(
    wavePosition: GeoPosition,
    windPosition: GeoPosition
  ): boolean {
    return (
      wavePosition === GeoPosition.N &&
      windPosition === GeoPosition.S &&
      this.beach.position === GeoPosition.N
    );
  }

  private isWaveSouthAndWindNorth(
    wavePosition: GeoPosition,
    windPosition: GeoPosition
  ): boolean {
    return (
      wavePosition === GeoPosition.S &&
      windPosition === GeoPosition.N &&
      this.beach.position === GeoPosition.S
    );
  }

  private isWaveEastAndWindWest(
    wavePosition: GeoPosition,
    windPosition: GeoPosition
  ): boolean {
    return (
      wavePosition === GeoPosition.E &&
      windPosition === GeoPosition.W &&
      this.beach.position === GeoPosition.E
    );
  }

  private isWaveWestAndWindEast(
    wavePosition: GeoPosition,
    windPosition: GeoPosition
  ): boolean {
    return (
      wavePosition === GeoPosition.W &&
      windPosition === GeoPosition.E &&
      this.beach.position === GeoPosition.W
    );
  }
}
