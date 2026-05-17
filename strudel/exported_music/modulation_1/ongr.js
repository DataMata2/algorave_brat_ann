$: note("[c2*8 b2*8 a2*8 f2*8]/4").s("square").fm(slider(19.108, 0, 20)).fmh(10).fmdecay(0.1).fmsustain(0).fmattack(0.3).decay(0.2).sustain(0)._scope()
  // $: note("[c2*4 b2*4 a2*4 f2*8]/4").s("sine").fm(20).fmh(10).fmdecay(0.05).fmsustain(0).decay(0.4).sustain(0)._scope()

// $: s("bd(4,4), hh(8,8), - sd - [- sd]").bank("RolandTR909")
$: s("bd(4,4), hh(16,16)?0.2, rim rim rim [rim, sd], - - - cp").bank("RolandTR909")
$: note("c4 c4 a4 - g4 - [g4 -] g5").fm(1).fmh(1).decay(0.3)
