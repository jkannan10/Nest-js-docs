import { Args, Int, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Settings } from './Settings.modal';
import { SettingsDto } from './Seetings.dto';
import { SettingsService } from './Settings.service';

@Resolver((of) => Settings)
export class SettingsResolver {
  constructor(private readonly settingsService: SettingsService) {}
  @Query((returns) => Settings)
  getSettingsByID(@Args('id', { type: () => Int }) id: number) {
    return this.settingsService.getSettingsByID(id);
  }
  @Query((returns) => [Settings])
  getSettings() {
    return this.settingsService.getSettings();
  }
  @Mutation((returns) => Settings)
  createSettings(@Args('createSettingsData') settingsDto: SettingsDto) {
    return this.settingsService.createSettings(settingsDto);
  }
  @Mutation((returns) => Settings, { nullable: true })
  updateSettings(
    @Args('id', { type: () => Int }) id: number,
    @Args('settingsDto') settingsDto: SettingsDto,
  ) {
    return this.settingsService.updateSettings(id, settingsDto);
  }
  @Mutation((returns) => Boolean, { nullable: true })
  deleteSettings(@Args('id', { type: () => Int }) id: number) {
    return this.settingsService.deleteSettings(id);
  }
}
