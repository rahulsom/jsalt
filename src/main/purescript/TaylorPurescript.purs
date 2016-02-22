module TaylorPurescript where

import Prelude
import Data.Foldable (foldl)
import Data.Array ((..))
import Data.Int (toNumber)
import Control.Monad.Eff.Console (log)

--powImpl       :: Number -> Int -> Number -> Number -- <5>
--powImpl num p accum
--  | p == 0    = accum
--  | p > 0     = powImpl num (p-1) (accum * num)
--  | otherwise = powImpl num (p+1) (accum / num)
--
---- pow  :: Number -> Int -> Number
--pow num p     = powImpl num p 1.0
--
--factImpl      :: Int -> Number -> Number
--factImpl n accum
--  | n == 0    = accum
--  | n > 0     = factImpl (n-1) (accum * toNumber n)
--
---- fact :: Int -> Number
--fact n = factImpl n 1.0
--

-- pow  :: Number -> Int -> Number -- <1>
pow num p  -- <2>
  | p == 0    = 1.0
  | p > 0     = num     * pow num (p-1)
  | otherwise = 1.0/num * pow num (p+1)

-- fact :: Int -> Number
fact 0 = 1.0 -- <3>
fact n = toNumber (n) * fact(n-1)

-- sine :: Number -> Number
sine x = foldl (+) 0.0 $ map f (0 .. 10) where
    f i = pow (-1.0) i * pow x (i*2+1) / fact (i*2+1)

main = log "Hello" -- <4>