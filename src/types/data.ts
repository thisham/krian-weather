enum SouthMountEnum {
  blurry = "Samar",
  clear = 'Jelas',
  invisible= 'Tak Terlihat'
}

enum NorthEastCloudEnum {
  cloudy = 'Berawan',
  clear = 'Cerah'
}

enum DirectionalTypeEnum {
  none = 'None',
  east = 'East',
  west = 'West'
}

type WeatherDataType = {
  name: string;
  data: {
    southMount: SouthMountEnum,
    northEast: NorthEastCloudEnum,
    windDirection: DirectionalTypeEnum,
    cloudMovement: number,
    javaneseMonth: number,
  };
  rainyDay: boolean
}

export {
  WeatherDataType,

  SouthMountEnum,
  NorthEastCloudEnum,
  DirectionalTypeEnum
};
