---
layout: post
category : as3
tagline: ""
tags : [as3, flash]
---
{% include JB/setup %}


<div id="altContent" style="width:800px height:1500px">
<iframe src="/assets/native3d/flashshader" width="800" height="600" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes">
</iframe>
<a href='https://github.com/matrix3d/FlashShader/'>github</a>

    class VShader extends FlShader {
        public function VShader() 
        {
            super(Context3DProgramType.VERTEX);
            var model:Var = C();
            var view:Var = C(4);
            var perspective:Var = C(8);
            var lightPos:Var = mov(C(12));
            var pos:Var = VA();
            var norm:Var = VA(1);
            var worldPos:Var = m44(pos, model);
            var viewPos:Var = m44(worldPos, view);
            m44(viewPos, perspective, op);

            var eyeDirection:Var = neg(viewPos, null);
            mov(eyeDirection, null, V(2));
            var viewPosLight:Var = add(m44(lightPos, view),eyeDirection,V());
            var viewNormal:Var = m33(norm, model);
            mov(viewNormal, null, V(1));

        }
    }

    class FShader extends FlShader {
        public function FShader() 
        {
            super(Context3DProgramType.FRAGMENT);
            var diffColor:Var = C();
            var lightColor:Var = C(1);
            var lightPower:Var = lightColor.w;
            var ambientColor:Var = C(2);
            var specularPow:Var = C(3).x;

            var n:Var = nrm(V(1));
            var l:Var = nrm(V());
            var cosTheta:Var = sat(dp3(n,l));

            var e:Var = nrm(V(2));
            var r:Var = nrm(sub(mul2([C(3).y, dp3(l, n), n]), l));
            var cosAlpha:Var = sat(dp3(e,r));

            var color:Var = add(ambientColor, mul2([mov(lightColor), add(cosTheta, pow(cosAlpha, specularPow)), lightPower]));
            mul(color, diffColor, oc);
        }
    }

</div>