#import <React/RCTViewManager.h>
#import "LiquidGlassView.h"

@interface LiquidGlassViewManager : RCTViewManager
@end

@implementation LiquidGlassViewManager

RCT_EXPORT_MODULE(NativeLiquidGlassModule)
RCT_EXPORT_VIEW_PROPERTY(onPress, RCTBubblingEventBlock);

- (UIView *)view {
  return [[LiquidGlassView alloc] init];
}

@end
