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
|                 :ref:`AnimationCurve<api_AnimationCurve>` & | :ref:`curve<api_AnimationTrack_938d65a7>` ()                              |
+-------------------------------------------------------------+---------------------------------------------------------------------------+
|                                                         int | :ref:`duration<api_AnimationTrack_ae4716c9>` () const                     |
+-------------------------------------------------------------+---------------------------------------------------------------------------+
|                                                        void | :ref:`fixCurves<api_AnimationTrack_e360c4d7>` ()                          |
+-------------------------------------------------------------+---------------------------------------------------------------------------+
|  :ref:`AnimationTrack::Frames<api_AnimationTrack_Frames>` & | :ref:`frames<api_AnimationTrack_edbf28a1>` ()                             |
+-------------------------------------------------------------+---------------------------------------------------------------------------+
|                                                        void | :ref:`fromVariant<api_AnimationTrack_b3c07429>` (const Variant & variant) |
+-------------------------------------------------------------+---------------------------------------------------------------------------+
|                                                        void | :ref:`setDuration<api_AnimationTrack_97e06c53>` (int  duration)           |
+-------------------------------------------------------------+---------------------------------------------------------------------------+
|                                 :ref:`Variant<api_Variant>` | :ref:`toVariant<api_AnimationTrack_1e798542>` () const                    |
+-------------------------------------------------------------+---------------------------------------------------------------------------+
|                           :ref:`Quaternion<api_Quaternion>` | :ref:`valueQuaternion<api_AnimationTrack_edb2960c>` (float  time) const   |
+-------------------------------------------------------------+---------------------------------------------------------------------------+
|                                 :ref:`TString<api_TString>` | :ref:`valueString<api_AnimationTrack_6df243c7>` (float  time) const       |
+-------------------------------------------------------------+---------------------------------------------------------------------------+
|                                 :ref:`Vector4<api_Vector4>` | :ref:`valueVector4<api_AnimationTrack_230c8fad>` (float  time) const      |
+-------------------------------------------------------------+---------------------------------------------------------------------------+



.. _api_AnimationTrack_static:

Static Methods
--------------

None

.. _api_AnimationTrack_methods:

Methods Description
-------------------

.. _api_AnimationTrack_938d65a7:

 :ref:`AnimationCurve<api_AnimationCurve>` & **AnimationTrack::curve** ()

Returns curve used for interpolation based animation.

----

.. _api_AnimationTrack_ae4716c9:

 int **AnimationTrack::duration** () const

Returns a duration of track in milliseconds.

**See also** setDuration().

----

.. _api_AnimationTrack_e360c4d7:

 void **AnimationTrack::fixCurves** ()

Tries to fix animation curves in the animation track. Renormalizes existant keyframes and checks the duration.

----

.. _api_AnimationTrack_edbf28a1:

 :ref:`AnimationTrack::Frames<api_AnimationTrack::Frames>` & **AnimationTrack::frames** ()

Returns set of frames for frame-by-frame animation (e.g. sprites).

----

.. _api_AnimationTrack_b3c07429:

 void **AnimationTrack::fromVariant** (:ref:`Variant<api_Variant>` & *variant*)

Deserializes current track from variant.

----

.. _api_AnimationTrack_97e06c53:

 void **AnimationTrack::setDuration** (int  *duration*)

Sets a *duration* of track in milliseconds.

**See also** duration().

----

.. _api_AnimationTrack_1e798542:

 :ref:`Variant<api_Variant>`  **AnimationTrack::toVariant** () const

Serializes current track to Variant.

----

.. _api_AnimationTrack_edb2960c:

 :ref:`Quaternion<api_Quaternion>`  **AnimationTrack::valueQuaternion** (float  *time*) const

Returns current value for the animation curve. Parameter normalized *time* is used to interpolate value between key frames.

----

.. _api_AnimationTrack_6df243c7:

 :ref:`TString<api_TString>`  **AnimationTrack::valueString** (float  *time*) const

Returns current value at normalized *time* position.

----

.. _api_AnimationTrack_230c8fad:

 :ref:`Vector4<api_Vector4>`  **AnimationTrack::valueVector4** (float  *time*) const

Returns current value for the animation curve. Parameter normalized *time* is used to interpolate value between key frames.


