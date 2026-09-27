.. _api_AnimationTrack:

AnimationTrack
==============

Inherited: :ref:`Motion<api_Motion>`

.. _api_AnimationTrack_description:

Description
-----------



.. _api_AnimationTrack_public:

Public Methods
--------------

+-------------------------------------------------------------+---------------------------------------------------------------------------+
|                 :ref:`AnimationCurve<api_AnimationCurve>` & | :ref:`curve<api_AnimationTrack_2ae9856b>` ()                              |
+-------------------------------------------------------------+---------------------------------------------------------------------------+
|                                                         int | :ref:`duration<api_AnimationTrack_f7268ae9>` () const                     |
+-------------------------------------------------------------+---------------------------------------------------------------------------+
|                                                        void | :ref:`fixCurves<api_AnimationTrack_9fc6718a>` ()                          |
+-------------------------------------------------------------+---------------------------------------------------------------------------+
|  :ref:`AnimationTrack::Frames<api_AnimationTrack_Frames>` & | :ref:`frames<api_AnimationTrack_93052b1f>` ()                             |
+-------------------------------------------------------------+---------------------------------------------------------------------------+
|                                                        void | :ref:`fromVariant<api_AnimationTrack_a8b6ed5c>` (const Variant & variant) |
+-------------------------------------------------------------+---------------------------------------------------------------------------+
|                                                        void | :ref:`setDuration<api_AnimationTrack_9a085136>` (int  duration)           |
+-------------------------------------------------------------+---------------------------------------------------------------------------+
|                                 :ref:`Variant<api_Variant>` | :ref:`toVariant<api_AnimationTrack_e2c4a5d6>` () const                    |
+-------------------------------------------------------------+---------------------------------------------------------------------------+
|                           :ref:`Quaternion<api_Quaternion>` | :ref:`valueQuaternion<api_AnimationTrack_374c0eba>` (float  time) const   |
+-------------------------------------------------------------+---------------------------------------------------------------------------+
|                                 :ref:`TString<api_TString>` | :ref:`valueString<api_AnimationTrack_0afd6c7b>` (float  time) const       |
+-------------------------------------------------------------+---------------------------------------------------------------------------+
|                                 :ref:`Vector4<api_Vector4>` | :ref:`valueVector4<api_AnimationTrack_5e6fc9a0>` (float  time) const      |
+-------------------------------------------------------------+---------------------------------------------------------------------------+



.. _api_AnimationTrack_static:

Static Methods
--------------

None

.. _api_AnimationTrack_methods:

Methods Description
-------------------

.. _api_AnimationTrack_2ae9856b:

 :ref:`AnimationCurve<api_AnimationCurve>` & **AnimationTrack::curve** ()

Returns curve used for interpolation based animation.

----

.. _api_AnimationTrack_f7268ae9:

 int **AnimationTrack::duration** () const

Returns a duration of track in milliseconds.

**See also** setDuration().

----

.. _api_AnimationTrack_9fc6718a:

 void **AnimationTrack::fixCurves** ()

Tries to fix animation curves in the animation track. Renormalizes existant keyframes and checks the duration.

----

.. _api_AnimationTrack_93052b1f:

 :ref:`AnimationTrack::Frames<api_AnimationTrack::Frames>` & **AnimationTrack::frames** ()

Returns set of frames for frame-by-frame animation (e.g. sprites).

----

.. _api_AnimationTrack_a8b6ed5c:

 void **AnimationTrack::fromVariant** (:ref:`Variant<api_Variant>` & *variant*)

Deserializes current track from variant.

----

.. _api_AnimationTrack_9a085136:

 void **AnimationTrack::setDuration** (int  *duration*)

Sets a *duration* of track in milliseconds.

**See also** duration().

----

.. _api_AnimationTrack_e2c4a5d6:

 :ref:`Variant<api_Variant>`  **AnimationTrack::toVariant** () const

Serializes current track to Variant.

----

.. _api_AnimationTrack_374c0eba:

 :ref:`Quaternion<api_Quaternion>`  **AnimationTrack::valueQuaternion** (float  *time*) const

Returns current value for the animation curve. Parameter normalized *time* is used to interpolate value between key frames.

----

.. _api_AnimationTrack_0afd6c7b:

 :ref:`TString<api_TString>`  **AnimationTrack::valueString** (float  *time*) const

Returns current value at normalized *time* position.

----

.. _api_AnimationTrack_5e6fc9a0:

 :ref:`Vector4<api_Vector4>`  **AnimationTrack::valueVector4** (float  *time*) const

Returns current value for the animation curve. Parameter normalized *time* is used to interpolate value between key frames.


