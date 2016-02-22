module Test.Main where

import TaylorPurescript
import Math (abs)
import Prelude
import Control.Monad.Eff
import Control.Monad.Eff.Console
import Data.Int (toNumber, round)


import Test.Unit (test, runTest)
import Test.Unit.QuickCheck (quickCheck)
import Test.QuickCheck (Result(), (===))
import Test.Unit.Assert as Assert

-- pi :: Number
pi = 3.14159265359

--powersCascade :: Number -> Int -> Result -- <1>
--powersCascade a b = (pow a (b+1)) === ((pow a b)*a)
--
--factsCascade :: Int -> Result
--factsCascade a = (fact (b+1)) === (fact b * toNumber(b+1)) where
--  b = round $ abs $ toNumber a
--
main = runTest do
--  test "quickCheck pow function" do
--    quickCheck powersCascade -- <2>
--
--  test "quickCheck fact function" do
--    quickCheck factsCascade
--
  test "the pow function" do
    Assert.equal (pow 2.0 (-2)) 0.25 -- <3>
    Assert.equal (pow 2.0 (-1)) 0.5
    Assert.equal (pow 2.0 0)    1.0
    Assert.equal (pow 2.0 1)    2.0
    Assert.equal (pow 2.0 2)    4.0
  test "the fact function" do
    Assert.equal (fact 0) 1.0
    Assert.equal (fact 1) 1.0
    Assert.equal (fact 2) 2.0
    Assert.equal (fact 3) 6.0
  test "the sine function" do
    Assert.equal (sine 0.0)      0.0
    Assert.assert "sin pi/4 ~= 0.707" $ (sine (pi/4.0)) > 0.707
    Assert.assert "sin pi/4 ~= 0.707" $ (sine (pi/4.0)) < 0.708
    Assert.assert "sin pi/3 ~= 0.866" $ (sine (pi/3.0)) > 0.866
    Assert.assert "sin pi/3 ~= 0.866" $ (sine (pi/3.0)) < 0.869
    Assert.assert "sin pi/2 ~= 0.707" $ (sine (pi/2.0)) > 0.999
    Assert.assert "sin pi/2 ~= 0.707" $ (sine (pi/2.0)) < 1.001
