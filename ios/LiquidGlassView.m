#import "LiquidGlassView.h"

@implementation LiquidGlassView {
  UIVisualEffectView *_effectView;
}

- (instancetype)initWithFrame:(CGRect)frame {
  if (self = [super initWithFrame:frame]) {
    self.backgroundColor = [UIColor clearColor];
    self.userInteractionEnabled = YES;

#if __IPHONE_OS_VERSION_MAX_ALLOWED >= 260000
    // Create native liquid glass effect (iOS 18+)
    UIGlassEffect *glassEffect = [[UIGlassEffect alloc] init];
    glassEffect.interactive = YES;

    _effectView = [[UIVisualEffectView alloc] initWithEffect:glassEffect];
    _effectView.frame = self.bounds;
    _effectView.autoresizingMask =
      UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;

    [self addSubview:_effectView];
#endif

    // Tap gesture recognizer
    UITapGestureRecognizer *tap = [[UITapGestureRecognizer alloc]
      initWithTarget:self action:@selector(handleTap)];
    [self addGestureRecognizer:tap];
  }
  return self;
}

- (void)handleTap {
  if (self.onPress) {
    self.onPress(@{});
  }
}

@end
