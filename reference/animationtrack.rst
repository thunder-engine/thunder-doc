.. _api_AnimationTrack:

AnimationTrack
==============

Inherited: None

.. _api_AnimationTrack_description:

Description
-----------



.. _api_AnimationTrack_public:

Public Methods
--------------

+-------------------------------------------------------------+---------------------------------------------------------------------------+
|                 :ref:`AnimationCurve<api_AnimationCurve>` & | :ref:`curve<api_AnimationTrack_1b07ae49>` ()                              |
+-------------------------------------------------------------+---------------------------------------------------------------------------+
|                                                         int | :ref:`duration<api_AnimationTrack_91d85e64>` () const                     |
+-------------------------------------------------------------+---------------------------------------------------------------------------+
|                                                        void | :ref:`fixCurves<api_AnimationTrack_1e5b0293>` ()                          |
+-------------------------------------------------------------+---------------------------------------------------------------------------+
|  :ref:`AnimationTrack::Frames<api_AnimationTrack_Frames>` & | :ref:`frames<api_AnimationTrack_95e30af6>` ()                             |
+-------------------------------------------------------------+---------------------------------------------------------------------------+
|                                                        void | :ref:`fromVariant<api_AnimationTrack_fb453c0a>` (const Variant & variant) |
+-------------------------------------------------------------+---------------------------------------------------------------------------+
|                                                        void | :ref:`setDuration<api_AnimationTrack_084a26ce>` (int  duration)           |
+-------------------------------------------------------------+---------------------------------------------------------------------------+
|                                 :ref:`Variant<api_Variant>` | :ref:`toVariant<api_AnimationTrack_df6740a2>` () const                    |
+-------------------------------------------------------------+---------------------------------------------------------------------------+
|                           :ref:`Quaternion<api_Quaternion>` | :ref:`valueQuaternion<api_AnimationTrack_13947a5e>` (float  time) const   |
+-------------------------------------------------------------+---------------------------------------------------------------------------+
|                                 :ref:`TString<api_TString>` | :ref:`valueString<api_AnimationTrack_2806de31>` (float  time) const       |
+-------------------------------------------------------------+---------------------------------------------------------------------------+
|                                 :ref:`Vector4<api_Vector4>` | :ref:`valueVector4<api_AnimationTrack_8adfc210>` (float  time) const      |
+-------------------------------------------------------------+---------------------------------------------------------------------------+



.. _api_AnimationTrack_static:

Static Methods
--------------

None

.. _api_AnimationTrack_methods:

Methods Description
-------------------

.. _api_AnimationTrack_1b07ae49:

 :ref:`AnimationCurve<api_AnimationCurve>` & **AnimationTrack::curve** ()

Returns curve used for interpolation based animation.

----

.. _api_AnimationTrack_91d85e64:

 int **AnimationTrack::duration** () const

Returns a duration of track in milliseconds.

**See also** setDuration().

----

.. _api_AnimationTrack_1e5b0293:

 void **AnimationTrack::fixCurves** ()

Tries to fix animation curves in the animation track. Renormalizes existant keyframes and checks the duration.

----

.. _api_AnimationTrack_95e30af6:

 :ref:`AnimationTrack::Frames<api_AnimationTrack::Frames>` & **AnimationTrack::frames** ()

Returns set of frames for frame-by-frame animation (e.g. sprites).

----

.. _api_AnimationTrack_fb453c0a:

 void **AnimationTrack::fromVariant** (:ref:`Variant<api_Variant>` & *variant*)

Deserializes current track from *variant*.

----

.. _api_AnimationTrack_084a26ce:

 void **AnimationTrack::setDuration** (int  *duration*)

Sets a *duration* of track in milliseconds.

**See also** *duration*().

----

.. _api_AnimationTrack_df6740a2:

 :ref:`Variant<api_Variant>`  **AnimationTrack::toVariant** () const

Serializes current track to Variant.

----

.. _api_AnimationTrack_13947a5e:

 :ref:`Quaternion<api_Quaternion>`  **AnimationTrack::valueQuaternion** (float  *time*) const

Returns current value for the animation curve. Parameter normalized *time* is used to interpolate value between key frames.

----

.. _api_AnimationTrack_2806de31:

 :ref:`TString<api_TString>`  **AnimationTrack::valueString** (float  *time*) const

Returns current value at normalized *time* position.

----

.. _api_AnimationTrack_8adfc210:

 :ref:`Vector4<api_Vector4>`  **AnimationTrack::valueVector4** (float  *time*) const

Returns current value for the animation curve. Parameter normalized *time* is used to interpolate value between key frames.


